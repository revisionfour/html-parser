// HTML parsing module

var extend = require('node.extend');


function HTMLParser(settings){
	if (!(this instanceof HTMLParser)) return new HTMLParser(settings);

	settings = settings || {};
}


HTMLParser.prototype.removeATagAttributes = function(html, settings){
	return html.replace(/<a\s.*?>/gim,'<a>');
};

HTMLParser.prototype.removeBlockquoteAttributes = function(html, settings){
	return html.replace(/<blockquote\s.*?>/gi,'<blockquote>');
};

HTMLParser.prototype.removeBRAttributes = function(html, settings){
	return html.replace(/<br\s.*?>/gi,'<br>');
};

HTMLParser.prototype.removeDivTagAttributes = function(html, settings){
	return html.replace(/<div\s.*?>/gim,'<div>');
};


HTMLParser.prototype.removeHeaderTagAttributes = function(html, settings){
	// return html.replace(/<h[1-9]{1}.*?>/gim,'<h>');
	return html.replace(/<h[1-9]{0,}.*?>/gim,'<h>');
};

HTMLParser.prototype.removeImgTagAttributes = function(html, settings){
	return html.replace(/<img\s.*?>/gim,'<img>');
};

HTMLParser.prototype.removeSpanTagAttributes = function(html, settings){
	return html.replace(/<span\s.*?>/gim,'<span>');
};

HTMLParser.prototype.removePTagAttributes = function(html, settings){
	return html.replace(/<p\s.*?>/gim,'<p>');
};

HTMLParser.prototype.removeTableTagAttributes = function(html, settings){
	return html.replace(/<table\s.*?>/gim,'<table>');
};

HTMLParser.prototype.removeTDTagAttributes = function(html, settings){
	return html.replace(/<td\s.*?>/gim,'<td>');
};

HTMLParser.prototype.removeTRTagAttributes = function(html, settings){
	return html.replace(/<tr\s.*?>/gim,'<tr>');
};

HTMLParser.prototype.removeAllElementAttributes = function(html, settings){
	// Remove blockquote attributes
	html = this.removeBlockquoteAttributes(html);

	html = this.removeBRAttributes(html);

	// img tags
	html = this.removeImgTagAttributes(html);

	// h2 tags
	html = this.removeHeaderTagAttributes(html);


	html = this.removeDivTagAttributes(html);

	html = this.removeSpanTagAttributes(html);

	html = this.removeATagAttributes(html);

	html = this.removePTagAttributes(html);

	html = this.removeTableTagAttributes(html);

	html = this.removeTDTagAttributes(html);

	html = this.removeTRTagAttributes(html);

	// This should remove all attributes
	return html;
};

// Need to remove inline styles and attributes

HTMLParser.prototype.removeInlineStyle = function(html, settings){
	return html.replace(/\sstyle=".*?"/gm,'');
};


HTMLParser.prototype.removeInlineStyle = function(html, settings){
	return html.replace(/\sstyle=".*?"/gm,'');
};


HTMLParser.prototype.removeClass = function(html, settings){
	return html.replace(/\sclass=".*?"/gm,'');
};


HTMLParser.prototype.removeDataName = function(html, settings){
	return html.replace(/\sdata-name=".*?"/gm,'');
};

// data-name

HTMLParser.prototype.removeHref = function(html, settings){
	return html.replace(/\shref=".*?"/gm,'');
};

HTMLParser.prototype.removeId = function(html, settings){
	return html.replace(/\sid=".*?"/gm,'');
};





HTMLParser.prototype.minifyHTML = function(html, settings){
	html = this.removeNewLines(html);
	html = this.removeMultipleSpaces(html);

	// remove spaces in between tags
	return html.replace(/>\s{1,}</gim,'><');
};

// Remove strong tags

// Remove hr tags




HTMLParser.prototype.removeATags = function(html, settings){
	var config = extend({
		removeContents: false
	}, settings);

	// Inlcude a space
	if(config.removeContents){
		return html.replace(/<a.*?>.*?<\/a>/gim,' ');
	}
	else{
		return html.replace(/<a.*?>/gi,' ').replace(/<\/a>/gim,'');
	}
};

HTMLParser.prototype.removeAreaTags = function(html, settings){
	return html.replace(/<area.*?>/gim,'');
};

HTMLParser.prototype.removeBlockquote = function(html, settings){
	var config = extend({
		removeContents: false
	}, settings);

	// Inlcude a space
	if(config.removeContents){
		return html.replace(/<blockquote.*?>.*?<\/blockquote>/gi,' ');
	}
	else{
		return html.replace(/<blockquote.*?>/gi,' ').replace(/<\/blockquote>/gi,'');
	}
};

HTMLParser.prototype.removeBodyTags = function(html, settings){
	var config = extend({
		removeContents: false
	}, settings);

	// Inlcude a space
	if(config.removeContents){
		return html.replace(/<body.*?>.*?<\/body>/gi,'');
	}
	else{
		return html.replace(/<body.*?>/gi,'').replace(/<\/body>/gi,'');
	}
};

HTMLParser.prototype.removeBTags = function(html, settings){
	var config = extend({
		removeContents: false
	}, settings);

	// Inlcude a space
	if(config.removeContents){
		return html.replace(/<b>.*?<\/b>/gi,' ');
	}
	else{
		return html.replace(/<b>/gi,' ').replace(/<\/b>/gi,'');
	}
};

HTMLParser.prototype.removeComments = function(html, settings){
	return html.replace(/<!--.*?-->/gim,'');
};

HTMLParser.prototype.removeDivTags = function(html, settings){
	var config = extend({
		removeContents: false
	}, settings);

	// Inlcude a space
	if(config.removeContents){
		return html.replace(/<div.*?>.*?<\/div>/gi,' ');
	}
	else{
		return html.replace(/<div.*?>/gi,' ').replace(/<\/div>/gi,'');
	}
};

HTMLParser.prototype.removeHTags = function(html, settings){
	return html.replace(/<h>/gim,'');
};

// Do the whole thing
HTMLParser.prototype.removeHeadTags = function(html, settings){
	var config = extend({
		removeContents: false
	}, settings);

	if(config.removeContents){
		return html.replace(/<head.*?>.*?<\/head>/gi,'');
	}
	else{
		return html.replace(/<head.*?>/,'').replace(/<\/head>/,'');
	}
};

HTMLParser.prototype.removeHeaderTags = function(html, settings){
	var config = extend({
		removeContents: false
	}, settings);

	// Inlcude a space
	if(config.removeContents){
		// return html.replace(/<h[1-9]{1}.*?>.*?<\/h[1-9]{1}>/,' ');
		return html.replace(/<h[1-9]{0,}.*?>.*?<\/h[1-9]{1}>/,' ');
	}
	else{
		// return html.replace(/<h[1-9]{1}.*?>/,' ').replace(/<\/h[1-9]{1}>/gi,'');
		return html.replace(/<h[1-9]{0,}.*?>/,' ').replace(/<\/h[1-9]{1}>/gi,'');
	}
};

HTMLParser.prototype.removeHTMLTags = function(html, settings){
	var config = extend({
		removeContents: false
	}, settings);

	// Inlcude a space
	if(config.removeContents){
		return html.replace(/<html.*?>.*<\/html>/gi,'');
	}
	else{
		return html.replace(/<html.*?>/gi,'').replace(/<\/html>/gi,'');
	}
};

HTMLParser.prototype.removeImgTags = function(html, settings){
	return html.replace(/<img.*?>/gi,'');
};

HTMLParser.prototype.removeNewLines = function(html, settings){
	return html.replace(/(\r\n|\n|\r)/gm,'');
};

// Option to removeContents: true
HTMLParser.prototype.removeMapTags = function(html, settings){
	var config = extend({
		removeContents: false
	}, settings);

	// Inlcude a space
	if(config.removeContents){
		return html.replace(/<map.*?>.*?<\/map>/gi,' ');
	}
	else{
		return html.replace(/<map.*?>/gi,' ').replace(/<\/map>/gi,'');
	}
};

HTMLParser.prototype.removeMultipleSpaces = function(html, settings){
	return html.replace(/\s{2,}/g,' ');
};

HTMLParser.prototype.removeMetaTags = function(html, settings){
	return html.replace(/<meta.*?\/?>/gi,'');
};

HTMLParser.prototype.removeNonBreakingSpaces = function(html, settings){
	return html.replace(/&nbsp;/gi,' ');
};

HTMLParser.prototype.removeParagraphTags = function(html, settings){
	var config = extend({
		removeContents: false
	}, settings);

	// Inlcude a space
	if(config.removeContents){
		return html.replace(/<p.*?>.*?<\/p>/gi,' ');
	}
	else{
		return html.replace(/<p.*?>/gi,' ').replace(/<\/p>/gi,'');
	}
};

HTMLParser.prototype.removeSpanTags = function(html, settings){
	var config = extend({
		removeContents: false
	}, settings);

	// Inlcude a space
	if(config.removeContents){
		return html.replace(/<span.*?>.*?<\/span>/gi,' ');
	}
	else{
		return html.replace(/<span.*?>/gi,' ').replace(/<\/span>/gi,'');
	}
};

HTMLParser.prototype.removeStrongTags = function(html, settings){
	var config = extend({
		removeContents: false
	}, settings);

	// Inlcude a space
	if(config.removeContents){
		return html.replace(/<strong.*?>.*?<\/strong>/gi,' ');
	}
	else{
		return html.replace(/<strong.*?>/gi,' ').replace(/<\/strong>/gi,'');
	}
};

HTMLParser.prototype.removeBRTags = function(html, settings){
	// Inlcude a space
	return html.replace(/<br.*?>/gi,' ');
};

HTMLParser.prototype.removeTableTags = function(html, settings){
	var config = extend({
		removeContents: false
	}, settings);

	// Inlcude a space
	if(config.removeContents){
		return html.replace(/<table.*?>.*?<\/table>/gi,'');
	}
	else{
		return html.replace(/<table.*?>/gi,'').replace(/<\/table>/gi,'');
	}
};

HTMLParser.prototype.removeTBodyTags = function(html, settings){
	var config = extend({
		removeContents: false
	}, settings);

	// Inlcude a space
	if(config.removeContents){
		return html.replace(/<tbody.*?>.*?<\/tbody>/gi,'');
	}
	else{
		return html.replace(/<tbody.*?>/gi,'').replace(/<\/tbody>/gi,'');
	}
};

// BR, Blockquote, img

HTMLParser.prototype.removeBR = function(html, settings){
	var config = extend({
		removeContents: false
	}, settings);

	// Inlcude a space
	if(config.removeContents){
		return html.replace(/<br.*?>.*?<\/br>/gi,'');
	}
	else{
		return html.replace(/<br.*?>/gi,'').replace(/<\/br>/gi,'');
	}
};

HTMLParser.prototype.removeBlockquotes = function(html, settings){
	var config = extend({
		removeContents: false
	}, settings);

	// Inlcude a space
	if(config.removeContents){
		return html.replace(/<tbody.*?>.*?<\/tbody>/gi,'');
	}
	else{
		return html.replace(/<tbody.*?>/gi,'').replace(/<\/tbody>/gi,'');
	}
};

HTMLParser.prototype.removeTDTags = function(html, settings){
	var config = extend({
		removeContents: false
	}, settings);

	// Inlcude a space
	if(config.removeContents){
		return html.replace(/<td.*?>.*?<\/td>/gi,' ');
	}
	else{
		return html.replace(/<td.*?>/gi,' ').replace(/<\/td>/gi,'');
	}
};

HTMLParser.prototype.removeTitleTags = function(html, settings){
	var config = extend({
		removeContents: false
	}, settings);

	// Inlcude a space
	if(config.removeContents){
		return html.replace(/<title.*?>.*?<\/title>/gi,' ');
	}
	else{
		return html.replace(/<title.*?>/gi,' ').replace(/<\/title>/gi,'');
	}
};

HTMLParser.prototype.removeTRTags = function(html, settings){
	var config = extend({
		removeContents: false
	}, settings);

	// Inlcude a space
	if(config.removeContents){
		return html.replace(/<tr.*?>.*?<\/tr>/gi,' ');
	}
	else{
		return html.replace(/<tr.*?>/gi,' ').replace(/<\/tr>/gi,'');
	}
};

HTMLParser.prototype.removeAllHTMLTags = function(html, settings){
	html = this.minifyHTML(html);

	html = this.removeComments(html);

	html = this.removeHTMLTags(html);

	html = this.removeHeadTags(html);

	html = this.removeMetaTags(html);

	html = this.removeBodyTags(html);

	html = this.removeStrongTags(html);

	// try this
	html = this.removeHTags(html);

	html = this.removeBTags(html);

	html = this.removeBlockquote(html);

	html = this.removeImgTags(html);

	html = this.removeParagraphTags(html);

	html = this.removeNonBreakingSpaces(html);

	html = this.removeHeaderTags(html);

	html = this.removeDivTags(html);

	html = this.removeSpanTags(html);

	html = this.removeBRTags(html);

	html = this.removeATags(html);

	html = this.removeTableTags(html);

	html = this.removeTBodyTags(html);

	html = this.removeTRTags(html);

	html = this.removeTDTags(html);

	// Remove multiple spaces once again
	html = this.removeMultipleSpaces(html);

	return html;
}


module.exports = HTMLParser;





