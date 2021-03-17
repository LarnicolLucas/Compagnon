import dashboard from './dashboard.js'
import switch_button from './utils/switch.js'
import b0 from './svg/bulle0.js'
import b1 from './svg/bulle1.js'
import b2 from './svg/bulle2.js'


const container = {
    props: ['props'],
    template: `
        <section 
            class="row transiAll"
            style="position: relative; overflow: hidden;"
            :class="{
                'fixedHeight100': props.isLarge,
                'darkModeColor': props.darkMode,
                'lightModeColor': props.lightMode,
                'fontLarge': props.isLarge,
                'fontMobile': props.isMobile
            }"
        
        >

        <figure 
            style='position: absolute; top:0; left: -10%; width: 50%;'
        >
            <b0 class="responsive-img" :props="{gradient_left: gradientColorMode, gradient_right: props.color_primary2}"></b0>
        </figure>
        <figure 
            style='position: absolute; top: -30%; left: 60%; width: 50%;'
        >
            <b1 class="responsive-img" :props="{gradient_left: gradientColorMode, gradient_right: props.color_primary2}"></b1>
        </figure>
        <figure 
            style='position: absolute; top: 50%; left: calc(50% - 120px); width: 50%;'
        >
            <b2 class="responsive-img" :props="{gradient_left: gradientColorMode, gradient_right: props.color_primary2}"></b2>
        </figure>

            <switch_button 
                @switchclicked="changeMode" 
                :props="{off: 'LightMode', on: 'DarkMode'}"
                style="margin-left: 20px; margin-top: 20px; position: fixed;"
            ></switch_button>


            <dashboard style="padding: 0;" class="col m12 l8 offset-l2" :props="props"></dashboard>
        </section>
    `,
    methods:{
        changeMode: function(){
          this.$emit("switchclicked")
        }
      },
    computed: {
        gradientColorMode: function(){
            if(this.props.lightMode == true){
                return this.props.light_mode_color
            } else if( this.props.darkMode == true){
                return this.props.dark_mode_color
            }
        }
    },

    components: {
        dashboard: dashboard,
        switch_button: switch_button,
        b0: b0,
        b1: b1,
        b2: b2
    }
}

export default container