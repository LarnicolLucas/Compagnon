const card = {
    template:`
    <section class="row center-align glass borderRadius" :class="{'darkModeTextColor': props.darkMode, 'lightModeTextColor': props.lightMode}">
        <figure class="col s10 offset-s1">
            <img class="responsive-img circle" alt="avatar agent" :src="props.model.agent.chemin_avatar"/>
        </figure>
        <figcaption class="col s12">
            <h5><strong>{{props.model.agent.nom}} {{props.model.agent.prenom}}</strong></h5>
        </figcaption>
        <div class="divider"></div>
        <div class="col s12">
            <h6> {{props.model.agent.etape_cursus_PST}} </h6>
        </div>
        <section class="col s12">
            <div class="row">
                <div class="mini_badge col s12 m4 ">
                    {{props.model.agent.IMD}} IMD
                </div>
                <div class="mini_badge col s12 m4">
                    {{props.model.agent.PST}} PST
                </div>
                <div class="mini_badge col s12 m4">
                    {{props.model.agent.VPS}} VPS
                </div>
            </div>
        </section>
    </section>
    `,
    props:["props"]
}

export default card