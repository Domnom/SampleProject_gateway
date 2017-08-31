function HelpfulService()
{
	var me = this;

	this.add = function(intA, intB)
	{
		return parseInt(intA) + parseInt(intB);
	}

	this.subtract = function(intA, intB)
	{
		return parseInt(intA) - parseInt(intB);
	}

	this.getEnv = function()
	{
		return {
			'BACKEND_API_URL' : process.env.BACKEND_API_URL
		}
	}

}


module.exports = HelpfulService;