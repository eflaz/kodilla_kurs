var Contacts = React.createClass({
	propTypes: {
		items: React.PropTypes.array.isRequired
	},

	render: function() {
		var contacts = this.props.items.map(function(contact) {
			return (
				<div>
					<Contact item={contact} key={contact.id} />
					<ul className={contactsList}>{contacts}</ul>
				</div>
			);
		});
	}
});