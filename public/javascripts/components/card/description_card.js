import indicateur_visite from './indicateur_visite.js'

const description_card = {
    template:`
        <section>
            <div class="col s4 l6 offset-s4 offset-l3">
                <p> {{props.model.agent.etape_cursus_PST}} </p>
            </div>

            <section class="col s4 l8 offset-s4 offset-l2">
                <div class="row">
                    <indicateur_visite
                        v-for="keys in indicateurs"
                        :key="keys.id"
                        :props="{color: props.color_contrast, label: keys.label, value: keys.value}"
                    ></indicateur_visite>

                </div>
            </section>
        </section>
    `,
    props:["props"],

    data: function(){
        return {
            indicateurs : [
                {id: 0, label: 'IMD', value: this.props.model.agent.IMD},
                {id: 1, label: 'PST', value: this.props.model.agent.PST},
                {id: 2, label: 'VPS', value: this.props.model.agent.VPS}
            ]
        }
    },
    components: {
        indicateur_visite: indicateur_visite
    }
}

export default description_card