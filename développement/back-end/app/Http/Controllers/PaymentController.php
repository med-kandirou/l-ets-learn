<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function createPaymentIntent(Request $request)
    {
        \Stripe\Stripe::setApiKey(env('STRIPE_SECRET_KEY'));

        $intent = \Stripe\PaymentIntent::create([
            'amount' => $request->input('amount'),
            'currency' => 'usd',
            // add any additional payment details here
        ]);

        return response()->json(['client_secret' => $intent->client_secret]);
    }


    public function confirmPayment(Request $request)
    {
        \Stripe\Stripe::setApiKey(env('STRIPE_SECRET_KEY'));

        $intent = \Stripe\PaymentIntent::retrieve($request->input('paymentIntentId'));
        $intent->confirm([
            'payment_method' => $request->input('paymentMethodId'),
        ]);

        return response()->json(['success' => true]);
    }
}
