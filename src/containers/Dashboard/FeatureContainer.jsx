import { Header, Feature } from "../../components";

const FeatureContainer = ({ user, logOut }) => {
    return (
        <Header>
            <Header.Frame>
                <Feature>
                    <Feature.Frame>

                        <Feature.Title>
                            Welcome Back, {user.full_name}
                        </Feature.Title>
                        <Feature.SubTitle>
                            Let's do the best today &#128075;
                        </Feature.SubTitle>
                    </Feature.Frame>
                    <Feature.Frame>
                        <Feature.Link onClick={logOut}>Logout</Feature.Link>
                    </Feature.Frame>
                </Feature>
            </Header.Frame>
        </Header>
    )
}


export default FeatureContainer;