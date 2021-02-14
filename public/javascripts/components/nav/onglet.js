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
            text_color: false
        }
    },
    methods:{

        selected: function(){
            this.text_color= true;
            this.props.darkMode= false;
            this.props.lightMode= false;
        }
    }
}

export default onglet