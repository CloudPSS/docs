
function mxStencils(shapes) {
    this.desc = shapes;
    this.parseDescription();
};

/**
 * Variable: defaultLocalized
 * 
 * Static global variable that specifies the default value for the localized
 * attribute of the text element. Default is false.
 */
mxStencils.defaultLocalized = false;

/**
 * Variable: desc
 *
 * Holds the XML node with the stencil description.
 */
mxStencils.prototype.desc = null;

mxStencils.prototype.testCondition = function (instance, condition,dcond) {
    if (!instance)
        return (dcond || 'true') == 'true';
    if ((condition || 'true') == 'true')
        return true;
    try {
        var func = new Function('with(this){return ' + condition + '}');
        return func.call(instance.paramProxy);
    }
    catch (e) {
        console.log(e);
        return false;
    }
}

/**
 * Variable: constraints
 * 
 * Holds an array of <mxConnectionConstraints> as defined in the shape.
 */
mxStencils.prototype.constraints = function (shape) {
    var constraints = [];
    var instance = this.getInstance(shape);
    this.shapes.forEach(function (stencil) {
        if (stencil.constraints != null && this.testCondition(instance, stencil.condition))
            constraints = constraints.concat(stencil.constraints);
    }, this);
    return constraints;
}

/**
 * Variable: aspect
 *
 * Holds the aspect of the shape. Default is 'auto'.
 */
mxStencils.prototype.aspect = null;

/**
 * Variable: w0
 *
 * Holds the width of the shape. Default is 100.
 */
mxStencils.prototype.w0 = null;

/**
 * Variable: h0
 *
 * Holds the height of the shape. Default is 100.
 */
mxStencils.prototype.h0 = null;

/**
 * Variable: strokewidth
 *
 * Holds the strokewidth direction from the description.
 */
mxStencils.prototype.strokewidth = null;

mxStencils.prototype.shapes = null;

/**
 * Function: parseDescription
 *
 * Reads <w0>, <h0>, <aspect>, <bgNodes> and <fgNodes> from <desc>.
 */
mxStencils.prototype.parseDescription = function () {
    // LATER: Preprocess nodes for faster painting
    this.shapes = Array.prototype.slice.call(this.desc.getElementsByTagName('shape')).map(function (shape) { return new mxStencil(shape) });

    this.w0 = Number(this.desc.getAttribute('w') || 100);
    this.h0 = Number(this.desc.getAttribute('h') || 100);

    // Possible values for aspect are: variable and fixed where
    // variable means fill the available space and fixed means
    // use w0 and h0 to compute the aspect.
    var aspect = this.desc.getAttribute('aspect');
    this.aspect = (aspect != null) ? aspect : 'variable';

    // Possible values for strokewidth are all numbers and "inherit"
    // where the inherit means take the value from the style (ie. the
    // user-defined stroke-width). Note that the strokewidth is scaled
    // by the minimum scaling that is used to draw the shape (sx, sy).
    var sw = this.desc.getAttribute('strokewidth');
    this.strokewidth = (sw != null) ? sw : '1';
};

mxStencils.prototype.getInstance = function (shape) {
    // MY-TODO:
    return null;
}

/**
 * Function: drawShape
 *
 * Draws this stencil inside the given bounds.
 */
mxStencils.prototype.drawShape = function (canvas, shape, x, y, w, h) {
    var direction = mxUtils.getValue(shape.style, mxConstants.STYLE_DIRECTION, null);
    var aspect = this.computeAspect(shape.style, x, y, w, h, direction);
    var minScale = Math.min(aspect.width, aspect.height);
    var sw = (this.strokewidth == 'inherit') ?
        Number(mxUtils.getNumber(shape.style, mxConstants.STYLE_STROKEWIDTH, 1)) :
        Number(this.strokewidth) * minScale;
    canvas.save();
    canvas.setStrokeWidth(sw);
    var instance = this.getInstance(shape);
    this.shapes.forEach(function (element) {
        if (this.testCondition(instance, element.condition,element.dcond)) {
            canvas.save();
            element.drawShape(canvas, shape, x, y, w, h);
            canvas.restore();
        }
    }, this);
    canvas.restore();
};

/**
 * Function: computeAspect
 *
 * Returns a rectangle that contains the offset in x and y and the horizontal
 * and vertical scale in width and height used to draw this shape inside the
 * given <mxRectangle>.
 * 
 * Parameters:
 * 
 * shape - <mxShape> to be drawn.
 * bounds - <mxRectangle> that should contain the stencil.
 * direction - Optional direction of the shape to be darwn.
 */
mxStencils.prototype.computeAspect = function (shape, x, y, w, h, direction) {
    var x0 = x;
    var y0 = y;
    var sx = w / this.w0;
    var sy = h / this.h0;

    var inverse = (direction == mxConstants.DIRECTION_NORTH || direction == mxConstants.DIRECTION_SOUTH);

    if (inverse) {
        sy = w / this.h0;
        sx = h / this.w0;

        var delta = (w - h) / 2;

        x0 += delta;
        y0 -= delta;
    }

    if (this.aspect == 'fixed') {
        sy = Math.min(sx, sy);
        sx = sy;

        // Centers the shape inside the available space
        if (inverse) {
            x0 += (h - this.w0 * sx) / 2;
            y0 += (w - this.h0 * sy) / 2;
        }
        else {
            x0 += (w - this.w0 * sx) / 2;
            y0 += (h - this.h0 * sy) / 2;
        }
    }

    return new mxRectangle(x0, y0, sx, sy);
};