wp.blocks.registerBlockType("ourplugin/are-you-paying-attention", {
    title: "Are You Paying Attention?",
    icon: 'smiley',
    category: "common",
    edit: function(){
        return (
            <>
             <div>Hello this is pharagraph</div>
             <h4>okey</h4>
            </>
            )
         
    },
    save: function(){
        return wp.element.createElement("h1", null, "Hello, this is front-end")

    }
})