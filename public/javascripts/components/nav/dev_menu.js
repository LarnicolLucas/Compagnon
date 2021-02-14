const dev_menu = {
    template: `
        <div  
            style="
                position: absolute; 
                top: calc(50% - 15px); 
                right: -15px; 
                border-radius: 50%; 
                width: 25px; 
                height: 25px;
                cursor: pointer;
            "
            :style="{border: '1px solid '+props.color}"
            :class="{'darkModeTextColor': props.darkMode, 'lightModeTextColor': props.lightMode, 'darkModeColor': props.darkMode, 'lightModeColor': props.lightMode}"
            class="transi valign-wrapper"
            @click="toggle"
        >
            <i class="material-icons">{{icon}}</i>
        </div>
    `,
    props:["props"],
    data: function(){
        return {
            icon: "navigate_before",
            current_state : true
        }
    },
    methods: {
        toggle: function(){
            if(this.current_state){
                this.current_state = false;
                this.icon = "navigate_next"
                this.$emit("menuclose")
            } else {
                this.current_state = true;
                this.icon = "navigate_before"
                this.$emit("menuopen")
            }
        }
    }
}

export default dev_menu