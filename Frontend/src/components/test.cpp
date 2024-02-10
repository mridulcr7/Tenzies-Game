#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
map<pair<ll, ll>, ll> mp;
vector<vector<ll>> adj(1e6 + 1);
vector<ll> a(1e6 + 1), st1(1e6 + 1), add(1e6 + 1);

ll ans = 0;
ll total1 = 0, total2 = 0;
ll fans1 = -1, fans2 = -1;
ll sum;

void dfs1(ll curr, ll par)
{
    add[curr] = a[curr];
    for (auto x : adj[curr])
    {
        if (x != par)
        {
            dfs1(x, curr);
            add[curr] += add[x];
        }
    }
}

void dfs2(ll curr, ll par, vector<ll> &prev)
{
    ll ans1 = -1, ans2 = -1, ans3 = -1;
    ll m = 0;
    for (auto x : adj[curr])
    {
        if (x != par)
        {
            dfs2(x, curr, prev);
            st1[curr] += st1[x];
            if (add[x] == sum)
            {
                if (ans1 == -1)
                    ans1 = mp[{curr, x}];
                else
                    ans2 = mp[{curr, x}];
                prev.push_back(mp[{curr, x}]);
                total1++;
                m++;
            }
            if (add[x] == sum * 2)
            {
                ans3 = mp[{curr, x}];
            }
        }
    }
    if (m >= 2)
    {
        cout << "1\n";
        fans1 = ans1;
        fans2 = ans2;
    }
    else if (st1[curr] > 0 && st1[curr] < total1)
    {
        cout << "2\n";
        fans1 = prev[0];
        fans2 = prev.back();
    }
    else if (st1[curr] > 0 && ans3 != -1)
    {
        cout << "3\n";
        fans1 = prev.back();
        fans2 = ans3;
    }
    if (add[curr] == sum)
        st1[curr]++;
}

int main()
{
    ll t = 1;
    while (t--)
    {
        ll n;
        cin >> n;
        ll src;
        sum = 0;
        for (int i = 1; i <= n; i++)
        {
            ll x, y;
            cin >> x >> y;
            if (x == 0)
            {
                src = i;
            }
            else
            {
                adj[x].push_back(i);
                adj[i].push_back(x);
                mp[{x, i}] = i;
                mp[{i, x}] = i;
            }
            a[i] = y;
            sum = sum + y;
        }
        if (sum % 3 != 0)
        {
            cout << "-1\n";
        }
        else
        {
            sum = sum / 3;
            vector<ll> prev;

            dfs1(src, -1);
            dfs2(src, -1, prev);

            if (fans1 == -1)
            {
                cout << "-1\n";
            }
            else
            {
                cout << fans1 << " " << fans2 << "\n";
            }
        }
    }
}
