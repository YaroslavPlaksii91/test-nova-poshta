import axios from 'axios';

const API_KEY = '1b28326edcff857f4ee526a21a2b6018';
axios.defaults.baseURL = 'https://api.novaposhta.ua/v2.0/json/';

export async function getDocumentStatus(documentNumber) {
  const { data } = await axios.post('', {
    apiKey: API_KEY,
    modelName: 'TrackingDocument',
    calledMethod: 'getStatusDocuments',
    methodProperties: {
      Documents: [
        {
          DocumentNumber: documentNumber,
        },
      ],
    },
  });

  return data.data[0];
}

export async function getWarehouses(settlement = 'Київ', page = '1') {
  const { data } = await axios.post('', {
    apiKey: API_KEY,
    modelName: 'Address',
    calledMethod: 'getWarehouses',
    methodProperties: {
      CityName: settlement,
      Page: page,
      Limit: '100',
      Language: 'UA',
    },
  });

  return data.data;
}
