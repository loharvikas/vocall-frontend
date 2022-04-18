import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { SidebarContainer, VoiceContainer, AccountContainer, BillingContainer, InvoiceContainer, FeatureContainer, CreateContainer } from "../containers";
import * as ROUTES from '../constant/routes';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    return (
        <>
            <SidebarContainer />
            <Container>
                <FeatureContainer user={user} />
                <div style={{ marginLeft: "22px" }}>

                    <Routes>
                        <Route path={ROUTES.CREATE_VOICE} element={<CreateContainer user={user} />} />
                        <Route path={ROUTES.VOICES} element={<VoiceContainer user={user} />} />
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
    min-height: 100vh;
    filter: brightness(1.1);
`

export default Dashboard;