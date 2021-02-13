const onglet = {
    template: `
        <div style="
                cursor: pointer; 
                margin-bottom: 1em;
                border-radius: 0.5em 0 0 0.5em;
            "
            :style="{color: backGround}"
            :class="{'darkModeTextColor': props.darkMode, 'lightModeTextColor': props.lightMode}"
            @mouseover="preSelect"
            @click="selected"
            class="transi"
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
            backGround: ''
        }
    },
    methods:{
        preSelect: function(){
            this.backGround= this.props.color;
        },
        selected: function(){
            this.backGround= this.props.color;
        }
    }
}

export default onglet