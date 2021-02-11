import card from './card.js'

const dashboard = {
    template: `

        <article 
            class="col m12 l8 offset-l2 glass borderRadius fixedHeight80"
            style="margin-top: 10vh; display: flex;"
        >
            <div 
                class="leftNavBar margTopBot"
                :class='{"lightModeColor" : props.lightMode, "darkModeColor": props.darkMode}'
            >
            </div>

            <aside class="row main_content margTopBot">
                <div 
                    class="col s3 borderRadius glass"
                    style="margin-top: -10vh; margin-left: 68%;"
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
