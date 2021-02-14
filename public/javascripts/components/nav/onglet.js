const onglet = {
    template: `
        <div style="
                cursor: pointer; 
                margin-bottom: 1em;
                border-radius: 0.5em 0 0 0.5em;
            "
            :class="{'darkModeTextColor': props.darkMode, 'lightModeTextColor': props.lightMode}"
            @click="selected"
            class="transi onglet"
            :style='{color: text_color}'
        >
            <p class="valign-wrapper">
                <i class="material-icons"> {{props.icon}} </i> 
                <span v-show="props.hide">{{props.nom}}</span>
            </p>
        </div>
    `,
    props:['props'],
    data: function(){
        return {
            text_color: ""
        }
    },
    methods:{

        selected: function(){
            this.text_color= this.props.color;
            this.$emit("ongletSelected", {id: this.props.id, nom: this.props.nom})
        }
    },
    updated: function(){
        if(this.props.init){
            this.text_color = ""
        }
    }
}

export default onglet