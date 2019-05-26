import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    width: '100%'
  },
  feature: {
    height: 90,
    border: '2px solid #D2D2D2',
    padding: '42px 30px'
  },
  title: {
    margin: 0,
    fontSize: '26px'
  },
  description: {
    margin: 0,
    color: '#282828'
  }
};

const Features2 = ({classes}) => (
  <svg className={classes.root} width="1004" height="755" fill="none">
    <path d="M451 0v422.5c0 9.5-6.478 18.5-18.439 18.5H177.91c-15.947 0-26.91 13.4-26.91 27v85" stroke="url(#paint0_linear)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M551 3v419.5c0 9.5 6.5 18.5 18.5 18.5H824c16 0 27 13.4 27 27v85" stroke="url(#paint1_linear)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M501 12v541" stroke="url(#paint2_linear)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="12" y="553" width="280" height="190" rx="4" fill="#fff" filter="url(#filter0_d)"/>
    <text fill="#338B93" font-family="Ubuntu" font-size="26" font-weight="bold" letter-spacing="0em" white-space="pre">
      <tspan x="97" y="619.232">Selenoid</tspan>
    </text>
    <rect x="62" y="637" width="180" height="2" rx="1" fill="#282828" fill-opacity=".15"/>
    <text fill="#282828" font-family="Ubuntu" font-size="18" font-weight="300" letter-spacing="0em" white-space="pre">
      <tspan x="63.6699" y="669.844">Your company is using </tspan><tspan x="62.9053" y="694.663">cloud virtual machines</tspan>
    </text>
    <rect x="712" y="553" width="280" height="190" rx="4" fill="#fff" filter="url(#filter1_d)"/>
    <rect x="762" y="637" width="180" height="2" rx="1" fill="#282828" fill-opacity=".15"/>
    <text fill="#6739B4" font-family="Ubuntu" font-size="26" font-weight="bold" letter-spacing="0em" white-space="pre">
      <tspan x="794.274" y="619.232">Browsers</tspan>
    </text>
    <text fill="#282828" font-family="Ubuntu" font-size="18" font-weight="300" letter-spacing="0em" white-space="pre">
      <tspan x="760.392" y="669.844">You need ready-to-use </tspan><tspan x="792.621" y="694.663">online solution</tspan>
    </text>
    <rect x="362" y="553" width="280" height="190" rx="4" fill="#264694" filter="url(#filter2_d)"/>
    <text fill="#fff" font-family="Ubuntu" font-size="26" font-weight="bold" letter-spacing="0em" white-space="pre">
      <tspan x="467.385" y="619.232">Moon</tspan>
    </text>
    <rect x="412" y="637" width="180" height="2" rx="1" fill="#fff" fill-opacity=".15"/>
    <text fill="#fff" font-family="Ubuntu" font-size="18" font-weight="300" letter-spacing="0em" white-space="pre">
      <tspan x="411.622" y="669.844">Your company is using </tspan><tspan x="402.684" y="694.663">Kubernetes or Openshift</tspan>
    </text>
    <defs>
      <filter id="filter0_d" x="0" y="541" width="304" height="214" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="6"/>
        <feColorMatrix values="0 0 0 0 0.2 0 0 0 0 0.545098 0 0 0 0 0.576471 0 0 0 0.35 0"/>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
      <filter id="filter1_d" x="700" y="541" width="304" height="214" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="6"/>
        <feColorMatrix values="0 0 0 0 0.403922 0 0 0 0 0.223529 0 0 0 0 0.705882 0 0 0 0.35 0"/>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
      <filter id="filter2_d" x="350" y="541" width="304" height="214" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="6"/>
        <feColorMatrix values="0 0 0 0 0.14902 0 0 0 0 0.27451 0 0 0 0 0.580392 0 0 0 0.35 0"/>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
      <linearGradient id="paint0_linear" x1="450.502" y1="363.5" x2="419.42" y2="454.937" gradientUnits="userSpaceOnUse">
        <stop stop-color="#B6F492" stop-opacity="0"/>
        <stop offset="1" stop-color="#338B93"/>
      </linearGradient>
      <linearGradient id="paint1_linear" x1="556.5" y1="372" x2="572" y2="453.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#6739B4" stop-opacity="0"/>
        <stop offset="1" stop-color="#6739B4"/>
      </linearGradient>
      <linearGradient id="paint2_linear" x1="531" y1="373" x2="531" y2="476.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#213976" stop-opacity="0"/>
        <stop offset="1" stop-color="#264694"/>
      </linearGradient>
    </defs>
  </svg>
);

const features = [
  {
    title: 'Selenoid',
    description: 'Your company is using virtual machines',
    color: '#338B93',
    shadow: 'rgba(51, 139, 47, 0.35)'
  },
  {
    title: 'Moon',
    description: 'Your company is Kubernetes or Openshift',
    color: '#264694',
    shadow: 'rgba(38, 70, 148, 0.35)'
  },
  {
    title: 'Browsers',
    description: 'You need ready-to-use online solution',
    color: '#6739B4',
    shadow: 'rgba(137, 57, 180, 0.35)'
  }
];

const Features = ({ classes }) => (
  <Grid container spacing={24} justify="space-around">
    {features.map((feature, index) => (
      <Grid key={index} item xs={12} sm={3}>
        <div className={classes.feature} style={{boxShadow: `0 0 12px ${feature.shadow}`}}>
          <p className={classes.title} style={{color: feature.color}}>{feature.title}</p>
          <p className={classes.description}>{feature.description}</p>
        </div>
      </Grid>
    ))}
  </Grid>
);

export default withStyles(styles)(Features);
