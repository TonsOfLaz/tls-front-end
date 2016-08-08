

var navigation = new Vue({

	el: '#vue-navigation',

	data: {
		in_admin: false,
		more_or_less: 'More'
	},

	methods: {
		toggleMoreOrLess: function() {
			if (this.more_or_less === 'More') {
				this.more_or_less = 'Less';
			} else {
				this.more_or_less = 'More';
			}
		},
		toggleAdmin: function() {
			this.in_admin = !this.in_admin;
			this.setPageBackground();
		},
		setPageBackground: function() {
			if (this.in_admin) {
				$('#top-wrapper').addClass('in-admin');
				$('#logo-admin').addClass('fade-in');
			} else {
				$('#top-wrapper').removeClass('in-admin');
				$('#logo-admin').addClass('fade-out');
			}
		}

	},

	ready: function() {
		if (window.location.href.indexOf('admin') > 1) {
			this.in_admin = true;
		} else {
			this.in_admin = false;
		}
		
		this.setPageBackground();
	}

});