import {
      FETCH_COMPANIES_WITHOUT_PDF_REQUEST,
      FETCH_COMPANIES_WITHOUT_PDF_SUCCESS,
      FETCH_COMPANIES_WITHOUT_PDF_FAIL,
      SCRAP_PDF_REQUEST,
      SCRAP_PDF_SUCCESS,
      SCRAP_PDF_FAIL,
    } from "../constants/companiesConstants";
    import { BASE_URL } from "../constants/constants";
    import axios from "axios";
    
    // Action to fetch companies without PDFs
    export const fetchCompaniesWithoutPDF = () => {
      return async (dispatch) => {
        try {
          dispatch({ type: FETCH_COMPANIES_WITHOUT_PDF_REQUEST });
    
          const response = await axios.get(`${BASE_URL}/api/document/companies-without-pdf`, {
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          dispatch({
            type: FETCH_COMPANIES_WITHOUT_PDF_SUCCESS,
            payload: response.data.data,
          });
        } catch (error) {
          console.error(error);
          dispatch({
            type: FETCH_COMPANIES_WITHOUT_PDF_FAIL,
            payload: [{ message: error.message }],
          });
        }
      };
    };
    
    // Action to scrape PDFs
    export const scrapPDFs = (companyIds) => {
      return async (dispatch) => {
        try {
          dispatch({ type: SCRAP_PDF_REQUEST });
    
          const response = await axios.post(
            `${BASE_URL}/api/document/scrap-pdfs`,
            { companyIds },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
    
          dispatch({
            type: SCRAP_PDF_SUCCESS,
            payload: response.data,
          });
        } catch (error) {
          console.error(error);
          dispatch({
            type: SCRAP_PDF_FAIL,
            payload: [{ message: error.message }],
          });
        }
      };
    };
    