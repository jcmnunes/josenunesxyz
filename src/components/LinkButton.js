import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import iconCheveronRight from '../images/icon-cheveron-right.svg';

const LinkStyles = css`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.neutral200};

  .cheveron {
    transition: all 0.2s ease;
  }

  &:hover {
    text-decoration: none;

    .cheveron {
      transform: translateX(5px);
    }
  }

  .button-text {
    font-size: ${props => (props.small ? '14px' : '16px')};
    margin-left: 0;
    margin-right: 4px;
  }

  img {
    width: 24px;
    margin-bottom: 0;
  }

  .icon {
    margin-right: 16px;
  }
`;

const StyledLink = styled(Link)`
  ${LinkStyles}
`;

const StyledAnchor = styled.a`
  ${LinkStyles}
`;

class LinkButton extends Component {
  render() {
    const { icon, iconAltText, small, to, children, ...rest } = this.props;
    const internal = /^\/(?!\/)/.test(to);
    const file = /\.[0-9a-z]+$/i.test(to);
    const content = (
      <>
        {icon && <img className="icon" src={icon} alt={iconAltText} />}
        <span className="button-text">{children}</span>
        <img className="cheveron" src={iconCheveronRight} alt="icon-cheveron-right" />
      </>
    );
    if (internal && !file) {
      return (
        <StyledLink to={to} small={small} {...rest}>
          {content}
        </StyledLink>
      );
    }
    return (
      <StyledAnchor href={to} small={small} {...rest}>
        {content}
      </StyledAnchor>
    );
  }
}

export default LinkButton;
