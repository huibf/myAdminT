<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
        //该方法将会为颁发访问令牌、撤销访问令牌、客户端以及私人访问令牌注册必要的路由
        Passport::routes();
        //默认情况下，Passport 颁发的访问令牌（access token）是长期有效的，如果你想要配置生命周期短一点的令牌，可以使用 tokensExpireIn 和 refreshTokensExpireIn 方法
        Passport::tokensExpireIn(now()->addDays(15));
        Passport::refreshTokensExpireIn(now()->addDays(30));
    }
}
