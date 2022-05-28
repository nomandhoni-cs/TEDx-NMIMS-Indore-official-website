import "./tedxNMIMS.scss";
import TEDxLogo from "../TEDxLogo/TEDxLogo";
import data from "../../masterData.json";
import GradientHeading from "../gradientHeading/gradientHeading";
import ImagesCarousel from "../carousel/carousel";
import { Button } from "antd";
import BlackGlass from "../glassSection/blackGlass";

const showMoreButtonComponent = () => {
    if (data.tedxNMIMSDescription.showMoreButton) {
        return (
            <a href={data.tedxNMIMSDescription.link} target="_blank">
                <Button type="primary" className="moreButton" size="large">
                    More
                </Button>
            </a>
        );
    }
};

export default function TedxNMIMS() {
    return (
        <>
            <ImagesCarousel forPage="TEDxNMIMS" />
            <div className="aboutTedxNMIMS">
                <div className="centerContent">
                    <TEDxLogo />
                    <BlackGlass
                        heading={data.tedxNMIMSDescription.title}
                        content={data.tedxNMIMSDescription.description}
                        showHeading={false}
                    />
                </div>
            </div>
        </>
    );
}
