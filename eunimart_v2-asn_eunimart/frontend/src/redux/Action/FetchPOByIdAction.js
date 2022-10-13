import axios from "axios";
import { NEW_BASE_URL } from "../../services/api";
import { config } from "../../services/config";
import * as types from "./ActionType";
import GLOBAL_API_SOURCE from "../../GlobalApi";


export const FetchPOById = (id) => async (dispatch) => {
  var headers={
    "Content-type":"application/json",
    Authorization:`${GLOBAL_API_SOURCE.token}`
  }
  try {
    const response = await axios(`${NEW_BASE_URL}api/v1/purchase_orders/${id}`, config);
    dispatch({
      type: types.FETCH_PO_DATA_BY_ID_SUCCESS,
      payload: response.data?.data,
    });
  } catch (error) {
    //console.log(error);
  }
};


/*			
Copyright (C) 2022 Eunimart Omnichannel Pvt Ltd. (www.eunimart.com)			
All rights reserved.			
This program is free software: you can redistribute it and/or modify			
it under the terms of the GNU General Public License as published by			
the Free Software Foundation, either version 3 of the License, or			
(at your option) any later version.			
This program is distributed in the hope that it will be useful,			
but WITHOUT ANY WARRANTY; without even the implied warranty of			
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the			
GNU General Public License for more details.			
You should have received a copy of the GNU General Public License			
along with this program. If not, see <http://www.gnu.org/licenses/>.			
*/