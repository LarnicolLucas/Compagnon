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
                        :props="{color: props.color_contrast, label: 'IMD', value: imd.length}"
                    ></indicateur_visite>
                    <indicateur_visite
                        :props="{color: props.color_contrast, label: 'PST', value: pst.length}"
                    ></indicateur_visite>
                    <indicateur_visite
                        :props="{color: props.color_contrast, label: 'VPS', value: vps.length}"
                    ></indicateur_visite>

                </div>
            </section>
        </section>
    `,
    props:["props"],

    computed: {
        imd: function(){
            return this.props.model.interventions.filter(el => el.type == "IMD" ? true : false)
        },
        pst: function(){
            return this.props.model.interventions.filter(el => el.type == "PST" ? true : false)
        },
        vps: function(){
            return this.props.model.interventions.filter(el => el.type == "VPS" ? true : false)
        }
    },
    components: {
        indicateur_visite: indicateur_visite
    }
}

export default description_card