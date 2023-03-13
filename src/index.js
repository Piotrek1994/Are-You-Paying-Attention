wp.blocks.registerBlockType('ourplugin/are-you-paying-attention', {
	title: 'Are You Paying Attention?',
	icon: 'smiley',
	category: 'common',
	attributes: {
		skyColor: { type: 'string' },
		grassColor: { type: 'string'}
	},
	edit: function (props) {
		function updateSkyColor(event) {
			props.setAttributes({ skyColor: event.target.value })
		}
		function updateGrassColor(event) {
			props.setAttributes({ grassColor: event.target.value })
		}

		return (
			<>
				<input type='text' placeholder='sky color' name='' id='' onChange={updateSkyColor} value={props.attributes.skyColor}/>
				<input type='text' placeholder='grass color' name='' id='' onChange={updateGrassColor} value={props.attributes.grassColor}/>
			</>
		)
	},
	save: function (props) {
		return (
			<p>
				Today sky is <span className="skyColor">{props.attributes.skyColor}</span> and grass is <span className="grassColor">{props.attributes.grassColor}</span>.
			</p>
		)
	},
})
