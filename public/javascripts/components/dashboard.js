import card from './card.js'

const dashboard = {
    template: `

        <article 
            class="glass borderRadius fixedHeight80"
            style="margin-top: 10vh; display: flex;"
        >
            <div 
                class="leftNavBar margTopBot hide-on-med-and-down"
                :class='{"lightModeColor" : props.lightMode, "darkModeColor": props.darkMode}'
            >
            </div>

            <aside class="row main_content margTopBot">
                <div 
                    class="col s10 l3 offset-s1 offset-l6"
                    style="margin-top: -10vh;"
                >
                    <card :props="props"></card>
                </div>
            </aside>
            
        </article>
    `,
    props: ['props'],
    components:{
        card: card
    }
}

export default dashboard
