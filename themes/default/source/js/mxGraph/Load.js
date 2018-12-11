// Parses the given stencil set
mxStencilRegistry.parseStencilSet = function(root, postStencilLoad, install) {
    if (root.nodeName == 'stencils') {
        var shapes = root.firstChild;

        while (shapes != null) {
            if (shapes.nodeName == 'shapes') {
                mxStencilRegistry.parseStencilSet(shapes, postStencilLoad, install);
            }

            shapes = shapes.nextSibling;
        }
    } else {
        install = (install != null) ? install : true;
        var shape = root.firstChild;
        var packageName = '';
        var name = root.getAttribute('name');

        if (name != null) {
            var stencilName = name.replace(/ /g, "_");

            if (install) {
                mxStencilRegistry.addStencil(packageName + stencilName.toLowerCase(), new mxStencils(root));
            }

            if (postStencilLoad != null) {
                var w = root.getAttribute('w');
                var h = root.getAttribute('h');

                w = (w == null) ? 80 : parseInt(w, 10);
                h = (h == null) ? 80 : parseInt(h, 10);

                postStencilLoad(packageName, stencilName, name, w, h);
            }
        } else {
            while (shape != null) {
                if (shape.nodeType == mxConstants.NODETYPE_ELEMENT) {
                    name = shape.getAttribute('name');

                    if (name != null) {
                        packageName = packageName.toLowerCase();
                        var stencilName = name.replace(/ /g, "_");

                        if (install) {
                            mxStencilRegistry.addStencil(packageName + stencilName.toLowerCase(), new mxStencils(shape));
                        }

                        if (postStencilLoad != null) {
                            var w = shape.getAttribute('w');
                            var h = shape.getAttribute('h');

                            w = (w == null) ? 80 : parseInt(w, 10);
                            h = (h == null) ? 80 : parseInt(h, 10);

                            postStencilLoad(packageName, stencilName, name, w, h);
                        }
                    }
                }

                shape = shape.nextSibling;
            }
        }
    }
};

Graph.prototype.getAllConnectionConstraints = function(terminal, source) {
    {
        // if (terminal != null && terminal.shape != null &&
        //     terminal.shape.stencil != null) {
        //     // for stencils with existing constraints...
        //     if (terminal.shape.stencil != null) {
        //         return terminal.shape.stencil.constraints;
        //     }
        // } else
    };
    if (terminal != null) {

        if (this.model.isVertex(terminal.cell)&&!terminal.cell.edge) {
            if (terminal.shape != null) {
                if (terminal.shape.stencil != null) {
                    var constraints = terminal.shape.stencil.constraints;
                    if (typeof(constraints) == 'function')
                        return terminal.shape.stencil.constraints(terminal.shape);
                    else
                        return constraints
                }
                var ports = terminal.shape.getPorts();
                var cstrs = new Array();

                for (var id in ports) {
                    var port = ports[id];

                    var cstr = new mxConnectionConstraint(new mxPoint(port.x, port.y), port.perimeter);
                    cstr.id = id;
                    cstrs.push(cstr);
                }

                return cstrs;
            }
        }
        var constraints = mxUtils.getValue(terminal.style, 'points', null);

        if (constraints != null) {
            // Requires an array of arrays with x, y (0..1) and an optional
            // perimeter (0 or 1), eg. points=[[0,0,1],[0,1,0],[1,1]]
            var result = [];

            try {
                var c = JSON.parse(constraints);

                for (var i = 0; i < c.length; i++) {
                    var tmp = c[i];
                    result.push(new mxConnectionConstraint(new mxPoint(tmp[0], tmp[1]), (tmp.length > 2) ? tmp[2] != '0' : true));
                }
            } catch (e) {
                // ignore
            }

            return result;
        } else {
            if (terminal.shape != null) {
                if (terminal.shape.stencil != null) {
                    var constraints = terminal.shape.stencil.constraints;
                    if (typeof(constraints) == 'function')
                        return terminal.shape.stencil.constraints(terminal.shape);
                    return constraints;
                } else if (terminal.shape.constraints != null) {
                    return terminal.shape.constraints;
                }
            }
        }
    }

    return null;
};