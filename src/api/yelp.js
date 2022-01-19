import axios from 'axios';

export default axios.create({

    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer IHpUom4fw1WFsRPbFTxdIwrokdWeK9JnZ8CLsGJtOI1oVqOX6Nk7woxgoZdYNN2WSVyFxmUX7e-1VeLFMaTOmspQ6fpwiyj8X0pQOsyU3QEsUiVYgPAG6zal_ZDYYXYx' 
    }
});