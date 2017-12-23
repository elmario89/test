import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {formatDate} from 'src/helpers';

import ActionButtonSet from 'src/components/ui/ActionButtonSet';

class IntroAppDetails extends Component {
    renderDetails(app) {
        console.log('render', app);
        return (
            <section className='tpa-intro -small'>
                <div className='tpa-intro-body'>
                    <div className='tpa-intro-date'>{app.winDate ? formatDate(app.winDate) : null}</div>
                    <div className='tpa-intro-wrap'>
                        <div className='tpa-intro-inner'>
                            <div className='tpa-intro-title'>
                                <h1>{app.name}</h1>
                            </div>
                            <div className='tpa-intro-brief'>by&nbsp;
                                <a href={app.developer.url} target='_blank'>{app.developer.name}</a>
                                {
                                    app.collaborator ? 
                                    <span>
                                        &nbsp;made by&nbsp;
                                        <a href={app.collaborator.url} target='_blank'>{app.collaborator.name}</a>
                                    </span> 
                                    : null
                                }
                            </div>
                        </div>
                    </div>
                    <div className='tpa-intro-actions'>
                        {app.winDate ? <a className='tpa-intro-actions-link -none'>#Appoftheday</a> : null}
                    </div>
                    <div className='tpa-intro-actions -center'>
                        <a target='_blank' href={app.storeUrl} className='tpa-btn_transparent'>
                            <div className='tpa-btn_transparent-hover'></div>
                            <div className='tpa-btn_transparent-hover'></div>
                            <div className='tpa-btn_transparent-inner -inverse'>
                            <i className={app.platform === 'ios' ? '-apple tpa-icon' : '-google-play tpa-icon'} />
                            <span>{app.price.value !== 0 ? `${app.price.value} ${app.price.currency}` : 'Free'}</span>
                            </div>
                        </a>
                    </div>
                    <ActionButtonSet likeCount={app.likeCount} inverse={true} />
                </div>
            </section>
        )
    }

    render() {
        return (
          <div>
            {
                this.props.app ?
                this.renderDetails(this.props.app)
                : null
            }
          </div>
        )
    }
}

IntroAppDetails.propTypes = {
    app: PropTypes.object.isRequired
};

export default IntroAppDetails;
