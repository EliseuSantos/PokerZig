import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Page from '../../components/layout/Page';
import IconBack from '../../components/IconBack';

import { ApplicationState } from '../../store';
import { Form } from '../../store/forms/types';
import { fetchRequest } from '../../store/forms/actions';
import CardText from '../../components/CardText';

interface PropsFromState {
    loading: boolean;
    data: Form[];
    errors?: string;
}

interface PropsFromDispatch {
    fetchRequest: typeof fetchRequest;
}

type AllProps = PropsFromState & PropsFromDispatch;

const Wrapper = styled.div`
    position: relative;
    margin: 70px auto;
    & .arrow.left {
        left: 98px;
    }
`;

const WrapperCards = styled.div`
    display: inline-flex;
    justify-content: center;
    flex-wrap: wrap;
    align-self: flex-start;
    align-content: flex-start;
    width: 100%;
    margin: 0 auto;
    text-align: center;
`;

class FormIndexScreen extends React.Component<AllProps> {
    public componentDidMount() {
        const { fetchRequest: fr } = this.props;
        fr();

        window.addEventListener('scroll', this.handleScroll);
        window.removeEventListener('scroll', this.handleScroll);
    }

    public handleScroll() {
        if (
            window.innerHeight + document.documentElement.scrollTop !==
            document.documentElement.offsetHeight
        )
            return;
    }

    private renderData() {
        const { loading, data } = this.props;

        return (
            <Wrapper>
                <IconBack className="icon-back" link="/" />
                <WrapperCards>
                    {data.map((form: any, key) => (
                        <CardText
                            className="card-item"
                            key={key}
                            title={form.name}
                            link={`/forms`}
                        />
                    ))}
                </WrapperCards>
            </Wrapper>
        );
    }

    public render() {
        const { loading } = this.props;

        return (
            <Page>
                <Wrapper>{this.renderData()}</Wrapper>
            </Page>
        );
    }
}

const mapStateToProps = ({ forms }: ApplicationState) => ({
    loading: forms.loading,
    errors: forms.errors,
    data: forms.data,
});

const mapDispatchToProps = {
    fetchRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormIndexScreen);
