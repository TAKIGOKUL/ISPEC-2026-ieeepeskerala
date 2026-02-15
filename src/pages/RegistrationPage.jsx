import React from 'react';
import PageLayout from '../components/PageLayout';

const RegistrationPage = () => {
    return (
        <PageLayout title="Registration">
            <div className="container">
                <section className="mb-5">
                    <h2>Registration Fee Table</h2>
                    <p>All fees are quoted in Singapore Dollars (SGD). All deadlines are based on the UTC +08:00 time zone.</p>
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped">
                            <thead className="thead-light">
                                <tr>
                                    <th>Registration Category</th>
                                    <th>Author and Early Bird Fee<br /><small>(Before 15 July 2026)</small></th>
                                    <th>Regular Fee<br /><small>(16 July to 9 August 2026)</small></th>
                                    <th>On Site Fee<br /><small>(After 9 August 2026)</small></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>IEEE PES Society Member</td>
                                    <td>SGD 950.00</td>
                                    <td>SGD 1,140.00</td>
                                    <td>SGD 1,370.00</td>
                                </tr>
                                <tr>
                                    <td>IEEE Member</td>
                                    <td>SGD 1,095.00</td>
                                    <td>SGD 1,315.00</td>
                                    <td>SGD 1,575.00</td>
                                </tr>
                                <tr>
                                    <td>Non-Member</td>
                                    <td>SGD 1,425.00</td>
                                    <td>SGD 1,710.00</td>
                                    <td>SGD 2,055.00</td>
                                </tr>
                                <tr>
                                    <td>IEEE PES Student Member</td>
                                    <td>SGD 475.00</td>
                                    <td>SGD 570.00</td>
                                    <td>SGD 685.00</td>
                                </tr>
                                <tr>
                                    <td>IEEE Student Member</td>
                                    <td>SGD 570.00</td>
                                    <td>SGD 685.00</td>
                                    <td>SGD 820.00</td>
                                </tr>
                                <tr>
                                    <td>Student Non-Member</td>
                                    <td>SGD 665.00</td>
                                    <td>SGD 800.00</td>
                                    <td>SGD 960.00</td>
                                </tr>
                                <tr>
                                    <td>Life Member</td>
                                    <td>SGD 475.00</td>
                                    <td>SGD 570.00</td>
                                    <td>SGD 685.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="mb-5">
                    <h2>Registration Notes</h2>
                    <ul>
                        <li>Each registration is valid for one (1) participant only.</li>
                        <li>All participants, including co-authors, are required to register individually if they are planning to attend the conference.</li>
                        <li>For each accepted paper, at least one author must complete the online conference registration by 15 July 2026 (UTC+08:00) for the paper to be included in the conference technical program.</li>
                        <li>Each Full Conference registration may cover a maximum of two (2) papers and includes a ticket to the conference banquet.</li>
                        <li>Student registration covers one (1) paper and does not include the conference banquet.</li>
                        <li>Up to two (2) additional papers may be added to a Full Conference registration at SGD 200 per paper. Student registrations are not eligible for additional paper purchases.</li>
                    </ul>
                </section>

                <section className="mb-5">
                    <h2>Refund and Cancellation Policy</h2>
                    <ul>
                        <li>All cancellation requests must be submitted in writing to the Conference Secretariat at [Email to be announced].</li>
                        <li>Approved refunds (if any) will be processed after the conference.</li>
                        <li>A non-refundable administrative fee of 10% of the registration fee will be deducted from all approved refunds.</li>
                        <li>No refunds will be granted after 9 August 2026, including for no-shows.</li>
                        <li>Author registrations are non-refundable once the paper has been included in the conference program.</li>
                        <li>Registration transfers to another individual may be permitted, subject to Organizing Committee approval and a written request.</li>
                    </ul>
                </section>
            </div>
        </PageLayout>
    );
};

export default RegistrationPage;
