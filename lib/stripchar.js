/**
 * @constructor
**/
function StripChar() {}


/** 
 * Prototype
 * @param {Object} obj
 * @return {boolean} true or false
**/ 
StripChar.prototype.isEmptyObj = function(obj)
{
    if (obj == null) return true;
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;

    for (var key in obj)
    {
        if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
    }

    return true;
}

StripChar.isEmptyObj = function(obj)
{
    return new StripChar().isEmptyObj(obj);
}


/** 
 * Prototype
 * @param {String} str
 * @return {boolean} true or false
**/
StripChar.prototype.isLenZero = function(str)
{
    return (!str || 0 === str.length);
}

StripChar.isLenZero = function(str)
{
    return new StripChar().isLenZero(str);
}


/** 
 * Prototype
 * @param {String} str
 * @return {boolean} true or false
**/
StripChar.prototype.isLenMinMax = function(str)
{
    return (!str || str.length === 0 || str.length > 1);
}

StripChar.isLenMinMax = function(str)
{
    return new StripChar().isLenMinMax(str);
}


/** 
 * Prototype
 * @param {String} str
 * @return {boolean} true or false
**/
StripChar.prototype.isSpaces = function(str)
{
    return (!str || /^\s*$/.test(str));
}

StripChar.isSpaces = function(str)
{ 
    return new StripChar().isSpaces(str);
}


/** 
 * Prototype
 * @param {String} str
 * @return {boolean} true or false
**/
StripChar.prototype.isNull = function(str)
{
    return (!str || str === "undefined" || str === "null");
}

StripChar.isNull = function(str)
{
    return new StripChar().isNull(str);
}


/** 
 * Prototype
 * @param {String, String, String} str, task, replaceWith
 * @return {String}
**/
StripChar.prototype.replaceStripWhat = function(str, task, replaceWith)
{
    if(task == "RSExceptUnsAlpNum") return str.replace(/[^_ a-zA-Z 0-9]/g, replaceWith);
    if(task == "RSExceptUnsAlpha") return str.replace(/[^_ a-zA-Z]/g, replaceWith);
    else if(task == "RSspecChar") return str.replace(/[^a-zA-Z 0-9]/g, replaceWith);
    else if(task == "RSExceptNum") return str.replace(/[^0-9]/g, replaceWith);
    else if(task == "RSExceptAlpha") return str.replace(/[^a-zA-Z]/g, replaceWith);
}

StripChar.replaceStripWhat = function(str, task, replaceWith)
{
    return new StripChar().replaceStripWhat(str, task, replaceWith);
}


/** 
 * Prototype
 * @param {String, String, String} str, dowhat, replaceWith
 * @return {String}
**/
StripChar.prototype.StringProcess = function(str, dowhat, replaceWith)
{
    return this.replaceStripWhat(str, dowhat, replaceWith);
}

StripChar.StringProcess = function(str, dowhat, replaceWith)
{
    return new StripChar().StringProcess(str, dowhat, replaceWith);
}


/** 
 * Prototype
 * @param {Object, String, String} obj, dowhat, replaceWith
 * @return {Object}
**/
StripChar.prototype.ObjectProcess = function(obj, dowhat, replaceWith)
{
    var result = {};

    for (var prop in obj)
    {
        if(obj.hasOwnProperty(prop))
        {
            result[prop] = this.replaceStripWhat(obj[prop], dowhat, replaceWith);
        } 
    }

   return result;
}

StripChar.ObjectProcess = function(obj, dowhat, replaceWith)
{
    return new StripChar().ObjectProcess(obj, dowhat, replaceWith);
}


/** 
 * Prototype
 * @param {Object} obj
 * @return {String}
**/
StripChar.prototype.toType = function(obj)
{
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

StripChar.toType = function(obj)
{
    return new StripChar().toType(obj);
}


/** 
 * Prototype
 * @param {String|Object, String, String} input, task, replaceWith
 * @return {String|Object}
**/
StripChar.prototype.structure = function(input, task, replaceWith)
{
    var replacement = (!this.isLenZero(input) && !this.isSpaces(replaceWith) && !this.isNull(replaceWith)) ? replaceWith : '';     
  
    if(this.toType(input) === "object" && !this.isEmptyObj(input))
    {
        return this.ObjectProcess(input, task, replacement);
    }
    if (this.toType(input) === "string" && !this.isLenZero(input) && !this.isSpaces(input) && !this.isNull(input))
    {
        return this.StringProcess(input, task, replacement);
    }
    else
    {
        return false;
    }
}

StripChar.structure = function(input, task, replaceWith)
{
    return new StripChar().structure(input, task, replaceWith);
}

/** 
 * Prototype
 * @param {String|Object, String} input, replaceWith
 * @return {String|Object}
 * Replace OR Strip every thing EXCEPT Underscore, Small-Capital Alphabets and Numerics
**/
StripChar.prototype.RSExceptUnsAlpNum = function(input, replaceWith)
{   
    return this.structure(input, "RSExceptUnsAlpNum", replaceWith);
}

StripChar.RSExceptUnsAlpNum = function(input, replaceWith)
{
    return new StripChar().RSExceptUnsAlpNum(input, replaceWith);
}

/** 
 * Prototype
 * @param {String|Object, String} input, replaceWith
 * @return {String|Object}
 * Replace OR Strip every thing EXCEPT Underscore, Small-Capital Alphabets
**/
StripChar.prototype.RSExceptUnsAlpha = function(input, replaceWith)
{   
    return this.structure(input, "RSExceptUnsAlpha", replaceWith);
}

StripChar.RSExceptUnsAlpha = function(input, replaceWith)
{
    return new StripChar().RSExceptUnsAlpha(input, replaceWith);
}

/** 
 * Prototype
 * @param {String|Object, String} input, replaceWith
 * @return {String|Object}
 * Replace OR Strip every thing including special characters EXCEPT Small-Capital Alphabets and Numerics
**/
StripChar.prototype.RSspecChar = function(input, replaceWith)
{
    return this.structure(input, "RSspecChar", replaceWith);
}

StripChar.RSspecChar = function(input, replaceWith)
{
    return new StripChar().RSspecChar(input, replaceWith);
}

/** 
 * Prototype
 * @param {String|Object, String} input, replaceWith
 * @return {String|Object}
 * Replace OR Strip every thing EXCEPT Numerics
**/
StripChar.prototype.RSExceptNum = function(input, replaceWith)
{
    return this.structure(input, "RSExceptNum", replaceWith);
}

StripChar.RSExceptNum = function(input, replaceWith)
{
    return new StripChar().RSExceptNum(input, replaceWith);
}

/** 
 * Prototype
 * @param {String|Object, String} input, replaceWith
 * @return {String|Object}
 * Replace OR Strip every thing EXCEPT Small-Capital Alphabets 
**/
StripChar.prototype.RSExceptAlpha = function(input, replaceWith)
{
    return this.structure(input, "RSExceptAlpha", replaceWith);   
}

StripChar.RSExceptAlpha = function(input, replaceWith)
{
    return new StripChar().RSExceptAlpha(input, replaceWith);
}


module.exports = StripChar;
