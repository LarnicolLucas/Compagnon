import dashboard from './dashboard.js'
import switch_button from './utils/switch.js'


const container = {
    props: ['props'],
    template: `
        <section 
            class="row transiAll"
            style="position: relative; overflow: hidden;"
            :class="{'fixedHeight100': props.isLarge, 'darkModeColor': props.darkMode, 'lightModeColor': props.lightMode}"
        
        >

        <figure style='position: absolute; top:0; left: -10%; width: 50%;'><img class="responsive-img" src="/images/bulle0.svg"/></figure>
        <figure style='position: absolute; top: -30%; left: 60%; width: 50%;'><img class="responsive-img" src="/images/bulle1.svg"/></figure>

            <switch_button 
                @switchclicked="changeMode" 
                :props="{off: 'LightMode', on: 'DarkMode'}"
                style="margin-left: 20px; margin-top: 20px; position: fixed;"
            ></switch_button>


            <dashboard class="col m12 l8 offset-l2" :props="props"></dashboard>
        </section>
    `,
    methods:{
        changeMode: function(){
          this.$emit("switchclicked")
        }
      },

    components: {
        dashboard: dashboard,
        switch_button: switch_button
    }
}

export default container