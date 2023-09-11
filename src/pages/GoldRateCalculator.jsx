import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function GoldRateCalculator() {

    const [goldRate, setgoldRate] = useState();
    const [invalidGoldMessage, setInvalidGoldMessage] = useState(false);
    const [wastage, setWastage] = useState();
    const [goldWeight, setgoldWeight] = useState();
    const [goldAmount, setgoldAmount] = useState(0);
    const [wastageamount, setWastageAmount] = useState(0);
    const [gstgold, setGSTGold] = useState(0);
    const [totalGoldAmount, setTotalGoldAmount] = useState(0);
    const [wastageInGram, setWastageInGram] = useState(0);


    function getgoldAmount() {
        if (goldRate && goldWeight) {
            const goldAmount = goldRate * goldWeight;
            const wastageAmount = (wastage / 100) * goldAmount;
            const GSTAmount = 0.03 * (goldAmount + wastageAmount);
            const totalGoldAmount = goldAmount + wastageAmount + GSTAmount;
            const wastageInGram = (wastage / 100) * goldWeight;

            setgoldAmount(goldAmount);
            setGSTGold(GSTAmount);
            setTotalGoldAmount(totalGoldAmount);
            setWastageAmount(wastageAmount);
            setWastageInGram(wastageInGram);
        } else {
            setInvalidGoldMessage(true);
        }
    }


    const navigateTo = useNavigate();
    const handleChange = () => {
        navigateTo('/productlist')
    }



    return (

        <div className='App'>

            <div>

                <div>
                    <div className="calc-topBtn col-4">
                    </div>
                    <div className="col-lg-12 col-sm-12 col-xs-12">
                        <div className="collapse multi-collapse show" id="multiCollapseExample1">
                            <h1 className="calc-headerName">Gold Rate Calculator</h1>
                            <form className='calc-form'>
                                <div>
                                    <label className='calc-label'>Gold rate in &#x20b9;</label>
                                    <input type="number" min={1} className="form-control" value={goldRate} onChange={e => setgoldRate(+e.target.value)} />
                                </div>
                                <div>
                                    <label className='calc-label'>Gold Weight in grams</label>
                                    <input type="number" min={1} className="form-control" value={goldWeight} onChange={e => setgoldWeight(+e.target.value)} />
                                </div>
                                <div>
                                    <label className='calc-label'>Wastage in %</label>
                                    <input type="number" min={1} className="form-control" value={wastage} onChange={e => setWastage(+e.target.value)} />
                                </div>
                                {invalidGoldMessage && <p className="invalidMessage"> ** Invalid input values **</p>}
                            </form>
                            <button className="calc-button" onClick={getgoldAmount}>Calculate</button>

                            <table className="calc-table">
                                <tr>
                                    <th>Description</th>
                                    <th>Rate</th>
                                </tr>
                                <tr>
                                    <td>Actual Gold Rate</td>
                                    <td>&#x20b9;{goldAmount}</td>
                                </tr>
                                <tr>
                                    <td>Wastage in amount ({wastage}%)</td>
                                    <td>&#x20b9;{Math.round(wastageamount)}</td>
                                </tr>
                                <tr>
                                    <td>GST (3%)</td>
                                    <td>&#x20b9;{Math.round(gstgold)}</td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td>&#x20b9;{Math.round(totalGoldAmount)}</td>
                                </tr>
                            </table>
                            <div>
                                <p className='para'>*Wastage in grams: {wastageInGram}</p>
                                <br></br>
                                <button className='product-btn' onClick={handleChange}>Go Back</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}