mxStencil.prototype.condition = null;
mxStencil.prototype.dcond = null;
/**
 * Function: parseDescription
 *
 * Reads <w0>, <h0>, <aspect>, <bgNodes> and <fgNodes> from <desc>.
 */
mxStencil.prototype.parseDescription = function () {
    // LATER: Preprocess nodes for faster painting
    this.fgNode = this.desc.getElementsByTagName('foreground')[0];
    this.bgNode = this.desc.getElementsByTagName('background')[0];
    this.w0 = Number(this.desc.getAttribute('w') || 100);
    this.h0 = Number(this.desc.getAttribute('h') || 100);
    this.condition = String(this.desc.getAttribute('cond') || true);
    this.dcond=String(this.desc.getAttribute('d-cond') || true);

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