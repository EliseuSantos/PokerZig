import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Page from '../../components/layout/Page';
import IconBack from '../../components/IconBack';

import { ApplicationState } from '../../store';
import { Move } from '../../store/moves/types';
import { fetchRequest } from '../../store/moves/actions';
import CardText from '../../components/CardText';

interface PropsFromState {
    loading: boolean;
    data: Move[];
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

class MoveIndexScreen extends React.Component<AllProps> {
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
                    {data.map((move: any, key) => (
                        <CardText
                            className="card-item"
                            key={key}
                            title={move.name}
                            link={`/moves/${move.name}`}
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

const mapStateToProps = ({ moves }: ApplicationState) => ({
    loading: moves.loading,
    errors: moves.errors,
    data: moves.data,
});

const mapDispatchToProps = {
    fetchRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoveIndexScreen);
