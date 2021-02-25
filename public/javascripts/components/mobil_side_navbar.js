import navigation from './nav/navigation.js'

const navbar = {
    template : `
    <div>

        <ul id="slide-out" class="sidenav" ref="navBarMobile">

            <li><div class="user-view">
                <div class="background">
                <img class="responsive-img" src="images/background_svg.svg">
                </div>
                <a href="#user"><img class="circle" src="images/avatar.jpg "></a>
                <a href="#name"><span class="white-text name">{{props.nom}}</span></a>
            </div></li>
            <li 
                v-for="keys in navigation"
                :key="keys.id"
            >
                <a>
                    <i class="material-icons">{{keys.icon}}</i>

                        {{keys.nom}}
                </a>
            </li>

            <img class="responsive-img circle" src="images/illustration_footer_nav.svg"/>
      
        </ul>
    </div>
    `,
    props: ["props"],
    data: function(){
        return {
            navigation: navigation
        }
    },
    methods: {
        initNavbar : function(){
            M.Sidenav.init(this.$refs.navBarMobile);
        }
    },
    mounted: function(){
        this.initNavbar()
    }
}

export default navbar