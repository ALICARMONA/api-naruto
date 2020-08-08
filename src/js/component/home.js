import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const Anime = () => {
		const [busqueda, setBusqueda] = useState("");
		const [data, setData] = useState([]);
		const [cargando, setCargando] = useState(false);
		const buscar = e => {
			e.preventDefault();
			fetch(`https://api.jikan.moe/v3/search/anime?q=${busqueda}`)
				.then(response => response.json())
				.then(data => setData(data.resaults))
				.catch(error => console.log(error));
		};
	};

	return (
		<div classsName="Container is-mobile">
			<h1 className="is-size-4">Busca tu Anime Favorito</h1>
			<form onSubmit={buscar}>
				<div className="field has-addons">
					<div className="control">
						<input
							className="input"
							onChange={e => setBusqueda(e.target.value)}
							placeholder="Naruto"
						/>
					</div>
					<div className="control">
						<button
							className={`button is-into ${cargando &&
								"is-loading"}`}
							type="submit">
							BUSCAR
						</button>
					</div>
				</div>
			</form>
			<div classsName="card-list">
				{data.map((d, i) => (
					<div className="card" key={i}>
						<div className="card-image">
							<figure className="image is-9by16">
								<img src={d.image_url} />
							</figure>
						</div>
						<div className="card-content">
							<div className="content">{d.title}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
