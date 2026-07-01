/*! DataTables jQuery UI integration
 * © SpryMedia Ltd - datatables.net/license
 */

(function(factory){
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['datatables.net'], function (dt) {
			return factory(window, document, dt);
		});
	}
	else if (typeof exports === 'object') {
		// CommonJS
		var cjsRequires = function (root) {
			if (! root.DataTable) {
				require('datatables.net')(root);
			}
		};

		if (typeof window === 'undefined') {
			module.exports = function (root) {
				if (! root) {
					// CommonJS environments without a window global must pass a
					// root. This will give an error otherwise
					root = window;
				}

				cjsRequires(root);
				return factory(root, root.document, root.DataTable);
			};
		}
		else {
			cjsRequires(window);
			module.exports = factory(window, window.document, window.DataTable);
		}
	}
	else {
		// Browser
		factory(window, document, window.DataTable);
	}
}(function(window, document, DataTable) {
'use strict';


/**
 * DataTables integration for jQuery UI.
 *
 * This file sets the defaults and adds options to DataTables to style its
 * controls using jQuery UI. See https://datatables.net/manual/styling/jqueryui
 * for further information.
 */
DataTable.util.object.assignDeep(DataTable.ext.classes, {
    container: 'dt-container dt-jqueryui',
    paging: {
        active: 'ui-state-disabled',
        button: 'fg-button ui-button ui-state-default',
        container: 'dt-paging fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi',
        disabled: 'ui-state-disabled'
    },
    thead: {
        cell: 'ui-state-default fg-toolbar ui-toolbar ui-widget-header'
    },
    tfoot: {
        cell: 'ui-state-default ui-widget-header'
    },
    layout: {
        row: 'dt-layout-row ui-helper-clearfix',
        tableCell: 'table'
    }
});
// Set the defaults for DataTables initialisation
DataTable.util.object.assignDeep(DataTable.defaults, {
    renderer: 'jqueryui'
});


return DataTable;
}));
