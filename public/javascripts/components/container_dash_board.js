import dashboard from './dashboard.js'

const container = {
    props: ['props'],
    template: `
        <section 
            class="row transiAll"
            style="position: relative; overflow: hidden;"
            :class="{'fixedHeight100': props.isLarge, 'darkModeColor': props.darkMode}"
        
        >
            <figure style='position: absolute; top:0; left: -10%; width: 50%;'><img class="responsive-img" src="/images/bulle0.svg"/></figure>
            <figure style='position: absolute; top: -30%; left: 60%; width: 50%;'><img class="responsive-img" src="/images/bulle1.svg"/></figure>

            <dashboard class="col m12 l8 offset-l2" :props="props"></dashboard>
        </section>
    `,

    components: {
        dashboard: dashboard
    }
}

export default container