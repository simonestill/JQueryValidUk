/*
     Author: Simon Estill	 
	 Copywrite: Wigan Council
	 Copying and Distribution:
	 This software is Free Software distributed under the terms of the MIT and GPL v3
	 Description:
	 This jquery library is an extension to the jquery validate plugin that allows validation of common UK dataatypes
*/


  /**
  @author: Simon Estill
  @requires: jquery.valid.js
  
  */

  /**
  */
  $.validator.addMethod(
                         'currency',
                        function(value)
						{
							return /^\d+(\.\d{2})?$/.test(value); 
						},
						"Please enter the amount in Uk Pounds"
						);
  /**
  */
  $.validator.addMethod(
                         'phoneNumber',
						/**
						 @param:value
						 @return:true|false
                         */ 
                        function(value)
						{
							return /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/.test(value); 
						},
						"Please enter a valid phone Number"
						);
  /**
  */
  $.validator.addMethod(
                        'postCode',
						/**
						 @param:value
						 @return:true|false
                         */
                        function(value)
						{
							return /^[A-Za-z]{1,2}\d{1,2}\s+\d[A-Za-z]{2}$/.test(value); 
						},
						"Please enter a valid UK PostCode"
						);

//National Health Number and NHS NUmber						
  
  $.validator.addMethod(
                         'niNumber',
						 /**
						 @param:value
						 @return:true|false
                         */
                        function(value)
						{
							return /^[A-Za-z]{2}\d{6}[A-Za-z]{1}$/.test(value); 
						},
						"Please enter a valid National Insurance Number"
						);
  
  /**
  */
  $.validator.addMethod(
                        'nhsNumber',
						/**
						 @param:value
						 @return:true|false
                         */
                        function(value)
						{
							return /^\d{10}$/.test(value); 
						},
						"Please a valid National Health Number"
						);
    
//Bank Account Number	
  /**
  */
  $.validator.addMethod(
                         'accountNumber',
						 /**
						 @param:value
						 @return:true|false
                         */
                        function(value)
						{
							return /^\d{7,8}$/.test(value); 
						},
						"Please a valid UK Bank Account /Builing Society Account Number"
						);
   
  /**
  */
  $.validator.addMethod(
                         'sortCode',
						/**
						 @param:value
						 @return:true|false
                         */
                        function(value)
						{
							return /^(\d){2}\-(\d){2}\-(\d){2}$/.test(value); 
						},
						"Please enter a Valid Sort Code"
						);

/**
*/						
