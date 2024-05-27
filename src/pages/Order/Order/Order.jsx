import { Helmet } from "react-helmet-async";
import { websiteTitle } from "../../../providers/AuthProvider";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
	const [tabIndex, setTabIndex] = useState(0);
	const [menu] = useMenu();
	const { category } = useParams();
	console.log(`category:`, category);
	const desserts = menu.filter((item) => item.category === "dessert");
	const soup = menu.filter((item) => item.category === "soup");
	const salad = menu.filter((item) => item.category === "salad");
	const pizza = menu.filter((item) => item.category === "pizza");
	const drinks = menu.filter((item) => item.category === "drinks");

	return (
		<>
			<Helmet>
				<title>{websiteTitle} - Order</title>
			</Helmet>
			<div>
				<Cover
					img={orderCover}
					title={"Order Food"}
				/>
				<Tabs
					defaultIndex={tabIndex}
					onSelect={(index) => setTabIndex(index)}
				>
					<TabList>
						<Tab>Salad</Tab>
						<Tab>Pizza</Tab>
						<Tab>Soup</Tab>
						<Tab>Dessert</Tab>
						<Tab>drinks</Tab>
					</TabList>
					<TabPanel>
						<OrderTab items={salad} />
					</TabPanel>
					<TabPanel>
						<OrderTab items={pizza} />
					</TabPanel>
					<TabPanel>
						<OrderTab items={soup} />
					</TabPanel>
					<TabPanel>
						<OrderTab items={desserts} />
					</TabPanel>
					<TabPanel>
						<OrderTab items={drinks} />
					</TabPanel>
				</Tabs>
			</div>
		</>
	);
};

export default Order;
