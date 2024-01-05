import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import '../assets/styles/nav.css'
function Entertainment()
{
  return(
    <div id="cit-iframe" className='c4'>
	<iframe src="https://www.socialmediatoday.com/news/entertainment-content-on-social-media-infographic/556958/"></iframe>
</div>
  )
}
function News()
{
  return(
    <div> 
                <h2 style={{ color: '#1d1203' }}> 
                    Entertainment 
                </h2>  
                <iframe width="1500"
                        height="2000"
                        src= 
                         "https://www.futuresource-consulting.com/content-entertainment/"
                        title="GeeksforGeeks" > 
                </iframe> 
            </div> 
  )
}
function Sports()
{
  return(
    <div> 
                
                <iframe width="1500"
                        height="2000"
                        src= 
                         "https://sports.feedspot.com/sports_blogs/"
                        title="GeeksforGeeks" > 
                </iframe> 
            </div> 
  )
}
function Techno()
{
  return(
    <div> 
                 
                <iframe width="1500"
                        height="2000"
                        src= 
                         "https://www.futuresource-consulting.com/content-entertainment/"
                        title="GeeksforGeeks" > 
                </iframe> 
            </div> 
  )
}
function Bussiness()
{
  return(
    <div> 
                 
                <iframe width="1500"
                        height="2000"
                        src= 
                         "https://www.sitebuilderreport.com/inspiration/small-business-websites"
                        title="GeeksforGeeks" > 
                </iframe> 
            </div> 
  )
}
function Education()
{
  return(
    <div> 
                <h2 style={{ color: '#1d1203' }}> 
                    Entertainment 
                </h2>  
                <iframe width="1500"
                        height="2000"
                        src= 
                         "https://www.futuresource-consulting.com/content-entertainment/"
                        title="GeeksforGeeks" > 
                </iframe> 
            </div> 
  )
}

const cardsData = [
  {
    title: 'Entertainment',
    image: 'https://thumbs.dreamstime.com/z/entertainment-news-5480737.jpg',
    description: ' the world of entertainment and international stardom.',
    route: '/enter'
  },
  {
    title: 'Bussiness',
    image: 'https://thumbs.dreamstime.com/b/bussiness-man-using-laptop-wooden-desk-107130158.jpg',
    description: 'It is a critical component of your business plan and executive summary.',
    route: '/Bussiness'
  },
  {
    title: 'Sports',
    image: 'https://thumbs.dreamstime.com/b/sports-tools-balls-shoes-ground-108686133.jpg',
    description: 'the activity exist through organisations and recognised as a sport.',
    route:'/sports'
  },
  {
    title: 'Technos',
    image: 'https://thumbs.dreamstime.com/b/e-commerce-online-shopping-digital-marketing-sales-business-technology-concept-137074336.jpg',
    description: 'Basically, we use our scientific knowledge , were using technology.',
  },
  {
    title: 'Education',
    image: 'https://thumbs.dreamstime.com/b/kid-creativity-education-concept-child-learning-art-mathematics-formula-school-boy-ideas-black-chalk-board-57852601.jpg',
    description: 'Education content is created by educators to engage their students.',
  },
  {
    title: 'News',
    image: 'https://thumbs.dreamstime.com/b/virtual-tv-news-set-sets-required-any-modern-show-channels-detailed-drawings-plans-modeled-real-87612809.jpg',
    description: 'the news media jargon for news from abroad, global subject.',
  },
 
];

const Cards = () => {
  return (
    <Grid container spacing={3}>
      {cardsData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Link to={card.route}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image={card.image}
              alt={card.title}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export {Cards,Entertainment,Education,Sports,Techno,Bussiness,News};
