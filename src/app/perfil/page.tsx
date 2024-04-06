import { Header } from "../ui/Header";
import { CodingIcon } from "../ui/Icons/CodingIcon";

export default async function Perfil() {
    return (
      <section>
        <Header>
          	Perfil
        </Header>

		<div className="container">
			<h2>Ups..</h2>
			<p>Seguimos trabajando en esta seccion</p>
			<div className="flex justify-center mt-4">
				<CodingIcon />
			</div>
		</div>
		
      </section>
    );
}
  