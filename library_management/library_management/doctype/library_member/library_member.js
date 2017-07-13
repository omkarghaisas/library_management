// Copyright (c) 2017, Omkar Ghaisas and contributors
// For license information, please see license.txt

frappe.ui.form.on('Library Member', {
	email: function(frm) {
		var is_email = frappe.utils.validate_type(frm.doc.email,"email");
		if(!is_email){
			frm.set_value("email","");
			frappe.msgprint(__("Please enter valid email"));
		}
	},
	address: (frm) => {
		var me = this;
		if(this.frm.doc.address) {
			frappe.call({
				method: "frappe.contacts.doctype.address.address.get_address_display",
				args: {"address_dict": this.frm.doc.address },
				callback: function(r) {
					if(r.message) {
						me.frm.set_value("address_display", r.message)
					}
				}
			})
		} else {
			this.frm.set_value("address_display", "");
		}
	}
});
