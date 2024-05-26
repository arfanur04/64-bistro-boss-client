import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
	return (
		<div className="pt-8 my-20 text-white bg-fixed featured-item">
			<SectionTitle
				heading={"Featured Item"}
				subHeading={"check it out"}
			></SectionTitle>
			<div className="items-center justify-center pt-12 pb-20 px-36 md:flex bg-slate-500 bg-opacity-60">
				<div>
					<img
						src={featuredImg}
						alt=""
					/>
				</div>
				<div className="md:ml-10">
					<p>Aug 20, 2029</p>
					<p className="uppercase">where can I get some</p>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
						consectetur modi iste rem. Similique, possimus? Quo hic tempora qui
						neque voluptas fuga necessitatibus perspiciatis minus? Nihil, quia
						totam? Praesentium tempora aliquam ipsa facilis quae quibusdam
						asperiores accusantium aperiam, ratione laudantium ex nostrum est
						odit pariatur? Alias consequatur est quibusdam obcaecati.
					</p>
					<button className="mt-4 border-0 border-b-4 btn btn-outline">
						Order Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default Featured;
