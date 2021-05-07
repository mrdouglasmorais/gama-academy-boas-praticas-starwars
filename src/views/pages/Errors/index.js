import darthError from '../../../assets/images/elements/404_darth-vader-png.png';
import errorBg from '../../../assets/images/background/bg3.jpeg'; 

let Error404 = {
    is_private: false,
    render: async () => {
        let view = `${error}`
        return view
    },

    after_render: () => {
        console.log('Try another one... :)')
    }
}
let error = `

<div class="error-default" style="background-image: url('${errorBg}')">
    <div classss="container">
        <h1>erro 404!</h1>
        <a href="http://localhost:8080/">
            <img src="${darthError}" alt="Vader error">
        <a>
        <h2>Caro padawan, este contéudo não existe.</h2>
        <h3>Clique no Vader e tente novamente.</h3>
    </div>
</div>
`

export default Error404;