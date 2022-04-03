import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { SidebarContainer, VoiceContainer, AccountContainer, BillingContainer, InvoiceContainer, FeatureContainer, CreateContainer } from "../containers";
import * as ROUTES from '../constant/routes';

const Dashboard = () => {
    return (
        <>
            <SidebarContainer />
            <Container>
                <FeatureContainer />
                <div style={{ marginLeft: "22px" }}>

                    <Routes>
                        <Route path={ROUTES.CREATE_VOICE} element={<CreateContainer />} />
                        <Route path={ROUTES.VOICES} element={<VoiceContainer />} />
                        <Route path={ROUTES.ACCOUNT} element={<AccountContainer />} />
                        <Route path={ROUTES.BILLING} element={<BillingContainer />} />
                        <Route path={ROUTES.INVOICES} element={<InvoiceContainer />} />
                    </Routes>
                </div>
            </Container>
        </>
    )
}

const Container = styled.div`
    margin-left: 90px;
    background-color: var(--TEAL-100);
    height: 100vh;
    filter: brightness(1.1);
`

export default Dashboard;