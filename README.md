This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


# **Complete SQL Query Builder**

This project provides a comprehensive and user-friendly web interface for generating various types of SQL queries. Designed to simplify the process of constructing SQL statements, it covers Data Definition Language (DDL), Data Manipulation Language (DML), Transaction Control Language (TCL), and Data Control Language (DCL) operations. Additionally, it integrates a powerful language model to assist in generating complex or custom SQL queries from natural language descriptions.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## **Features**

* **Diverse SQL Operations:** Generate queries for:  
  * **DDL (Data Definition Language):** Create, alter, and drop tables and indexes.  
  * **DML (Data Manipulation Language):** Perform SELECT, INSERT, UPDATE, and DELETE operations.  
  * **TCL (Transaction Control Language):** Manage transactions with COMMIT, ROLLBACK, and SAVEPOINT.  
  * **DCL (Data Control Language):** Grant and revoke privileges.  
* **Advanced DML Support:**  
  * **SELECT with JOINs:** Construct queries with INNER, LEFT, RIGHT, and FULL OUTER JOINs, specifying join conditions.  
  * **SELECT with CTEs (Common Table Expressions):** Define and utilize CTEs for more organized and readable complex queries.  
* **Intuitive User Interface:** Dynamic input fields adapt based on the selected SQL query type, guiding the user through the necessary parameters.  
* **Natural Language to SQL (LLM Integration):** For custom or highly complex queries, describe your requirement in plain English, and a large language model will attempt to generate the corresponding SQL.  
* **Copy to Clipboard:** Easily copy the generated SQL query to your clipboard for immediate use.  
* **Responsive Design:** The interface is designed to be accessible and functional across various devices and screen sizes.  
* **Custom Message Box:** Non-intrusive feedback messages for actions like copying SQL.

## **How to Use**

1. **Select Query Type:** Choose the desired SQL category (DDL, DML, TCL, DCL, or Custom) from the dropdown menu.  
2. **Provide Inputs:** Fill in the dynamic input fields that appear based on your selected query type. These fields guide you on the necessary information for constructing the SQL statement.  
3. **Generate SQL:**  
   * For DDL, DML, TCL, or DCL, click the "Generate SQL" button.  
   * For the "Other / Custom" option, enter your SQL query description in natural language into the provided textarea, then click "Generate SQL with LLM."  
4. **Review and Copy:** The generated SQL query will be displayed in the output area. Use the "Copy to Clipboard" button to quickly copy the query.

## **Technologies Used**

* **Next Js:** React js based Web framework.  
* **Tailwind CSS:** A utility-first CSS framework for rapid UI development and responsive design.

## **Installation**

This project is designed to run as a single-file React application within a web environment that provides the necessary Firebase configuration and authentication token (e.g., Google's Canvas environment).

To run locally, you would typically:

1. Set up a React development environment.  
2. Place the provided React code into your `App.js` or similar main component file.  
3. Ensure you have Tailwind CSS configured in your project.  
4. For the LLM functionality, you would need to set up your own API key for the Google Gemini API, though in the intended deployment environment, this is handled automatically.

## **Future Enhancements**

* **Enhanced Input Validation:** Implement more robust client-side validation for all input fields to provide immediate feedback on incorrect data.  
* **SQL Formatting Options:** Allow users to select different SQL formatting styles (e.g., uppercase keywords, indentation).  
* **Query History:** Store and retrieve previously generated queries.  
* **Schema Integration:** Potentially allow users to define a simple schema to provide more intelligent suggestions and validation.  
* **Backend Integration:** For a production-ready tool, integrate with a backend service to execute queries against a real database (with appropriate security measures).

# DEMO
[Demo Link for SQL builder](https://rajasekar-arch.github.io/sql-builder-ui)
