// Fitler object
// pass a list of docfields that need to be set as filters
// creates ranges for dates and number types
//
// ------------- 
// Filter By:
// Label [Input] [[ to [Input]]] [x]
// Label [Input] [[ to [Input]]] [x]
// [select:Add a filter]

wn.widgets.Filters = function(parent, fields) {
	this.fields = fields;
	this.filters = [];
	
	this.make = function() {
		this.filter_area = $a(parent, 'div', 'filters-wrapper')
		this.create_add_fitler_select()
	}
	
	this.create_add_fitler_select = function() {
		
		this.add_btn = $btn(parent, '+ Add a new Filter', this.add_filter);
	}
 	
	this.add_filter = function(df) {
		
	}

	this.get_values = function() {
		var values = {}
		for(var i=0;i<this.fitlers.length;i++) {
			var f = this.filters[i];
			values[f.df.fieldname] = f.field.get_value();
		}
		return values;
	}
	
}


// single fitler - label, input, (input1), delete btn
wn.widgets.SingleFilter = function(parent, docfield) {
	this.parent = parent;
	this.df = docfield;
	
}