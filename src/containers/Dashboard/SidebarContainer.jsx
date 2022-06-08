import React from 'react';
import { Sidebar } from '../../components';
import { SquareSVG, ArrowSVG, BillingSVG, ProfileSVG, PlusSVG } from '../../assets/icons';
import * as ROUTES from '../../constant/routes';

const SidebarContainer = () => {
    return (
        <Sidebar>
            <Sidebar.Frame>
                <Sidebar.Group>
                    <Sidebar.Header>
                        Vocall
                    </Sidebar.Header>
                </Sidebar.Group>
                <Sidebar.Group>
                    <Sidebar.Item to={ROUTES.CREATE_VOICE}>
                        <PlusSVG />
                    </Sidebar.Item>
                    <Sidebar.Item to={ROUTES.VOICES}>
                        <SquareSVG />
                    </Sidebar.Item>
                    <Sidebar.Item to={ROUTES.ACCOUNT}>
                        <ProfileSVG />
                    </Sidebar.Item>
                    <Sidebar.Item to={ROUTES.BILLING}>
                        <BillingSVG />
                    </Sidebar.Item>
                    <Sidebar.Item to={ROUTES.INVOICES}>
                        <ArrowSVG />
                    </Sidebar.Item>
                </Sidebar.Group>
                <Sidebar.Group>
                    <Sidebar.Header>
                        V
                    </Sidebar.Header>
                </Sidebar.Group>
            </Sidebar.Frame>
        </Sidebar>
    )
}

export default SidebarContainer;