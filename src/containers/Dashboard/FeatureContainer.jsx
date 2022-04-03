import { Header, Feature } from "../../components";

const FeatureContainer = () => {
    return (
        <Header>
            <Header.Frame>
                <Feature>
                    <Feature.Title>
                        Welcome Back, David!
                    </Feature.Title>
                    <Feature.SubTitle>
                        Let's do the best today &#128075;
                    </Feature.SubTitle>
                </Feature>
            </Header.Frame>
        </Header>
    )
}


export default FeatureContainer;